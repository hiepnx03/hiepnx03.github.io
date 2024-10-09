// Chuyển đổi từ địa chỉ IP thành số nguyên
function ipToInt(ipAddress) {
  const octets = ipAddress.split('.');
  return (parseInt(octets[0]) << 24) |
    (parseInt(octets[1]) << 16) |
    (parseInt(octets[2]) << 8) |
    parseInt(octets[3]);
}

// Chuyển đổi từ số nguyên thành địa chỉ IP
function intToIp(ip) {
  return [
    (ip >> 24) & 0xFF,
    (ip >> 16) & 0xFF,
    (ip >> 8) & 0xFF,
    ip & 0xFF
  ].join('.');
}

// Tính toán địa chỉ broadcast dựa trên địa chỉ mạng và subnet mask
function getBroadcastAddress(networkAddress, subnetMask) {
  const broadcast = networkAddress | (~subnetMask >>> 0);
  return intToIp(broadcast);
}

// Chuyển subnet mask dạng số bit thành dạng thập phân
function convertToSubnetMask(subnetBits) {
  const mask = (0xFFFFFFFF << (32 - subnetBits)) >>> 0;  // Tạo subnet mask dưới dạng số nguyên
  return intToIp(mask);
}

// Hàm mới để sắp xếp số lượng host và chỉ số LAN
function sortLans(hosts, lanIndices) {
  for (let i = 0; i < hosts.length - 1; i++) {
    for (let j = i + 1; j < hosts.length; j++) {
      if (hosts[i] < hosts[j]) {
        // Hoán đổi số lượng host
        let tempHost = hosts[i];
        hosts[i] = hosts[j];
        hosts[j] = tempHost;

        // Hoán đổi chỉ số LAN
        let tempIndex = lanIndices[i];
        lanIndices[i] = lanIndices[j];
        lanIndices[j] = tempIndex;
      }
    }
  }
}

// Chia mạng cho LAN
function calculateSubnet(networkAddress, hostCount, lanName, initialSubnetBits) {
  let m = Math.ceil(Math.log2(hostCount + 2)); // 2 bit thêm vào để loại trừ địa chỉ mạng và broadcast
  let subnetBits = 32 - m;  // Số bit dành cho subnet
  const n1 = initialSubnetBits;

  // Đảm bảo subnetBits không nhỏ hơn initialSubnetBits
  if (subnetBits < n1) {
    subnetBits = n1;
  }

  const baseIP = ipToInt(networkAddress);

  const subnetMask = convertToSubnetMask(subnetBits);
  const subnetMaskInt = ipToInt(subnetMask);

  const broadcastAddress = getBroadcastAddress(baseIP, subnetMaskInt);
  const stepSize = 1 << (32 - subnetBits);  // Bước nhảy = 2^(32 - subnetBits)

  // Địa chỉ đầu tiên của các host (sau địa chỉ mạng)
  const firstHostAddress = intToIp(baseIP + 1);

  // Địa chỉ cuối cùng của các host (trước địa chỉ broadcast)
  const broadcastInt = ipToInt(broadcastAddress);
  const lastHostAddress = intToIp(broadcastInt - 1);

  console.log(`------ LAN ${lanName} ------`);
  console.log(`${lanName} Số lượng host đã nhập: ${hostCount}`);
  console.log(`${lanName} m: = (2^m-2 >= ${hostCount}) => m: ${m}`);
  console.log(`${lanName} Subnet Bits: = 32 - m = ${subnetBits} => /${subnetBits}`);
  console.log(`${lanName} Step: 2^m = ${stepSize}`);
  console.log(`${lanName} Network Address: ${networkAddress}/${subnetBits}`);
  console.log(`${lanName} Subnet Mask: ${subnetMask}`);
  console.log(`${lanName} Broadcast Address: ${broadcastAddress}`);
  console.log(`${lanName} First Host Address: ${firstHostAddress}`);
  console.log(`${lanName} Last Host Address: ${lastHostAddress}`);

  const nextNetwork = baseIP + stepSize;
  return intToIp(nextNetwork);
}

// Hàm chia subnet
function divideSubnets(networkAddress, inputData) {
  for (let i = 0; i < inputData.lanCount; i++) {
    const lanName = "LAN" + inputData.lanIndices[i];
    networkAddress = calculateSubnet(networkAddress, inputData.hosts[i], lanName, inputData.initialSubnetBits);
  }
  return networkAddress;
}

// Nhập dữ liệu từ người dùng
function getInput() {
  const networkAddress = prompt("Nhập địa chỉ IP mạng kèm CIDR (ví dụ: 192.168.23.0/24):");
  const [ip, cidr] = networkAddress.split('/');
  const initialSubnetBits = parseInt(cidr, 10);

  const lanCount = parseInt(prompt("Nhập số lượng mạng con (LAN):"), 10);
  const hosts = [];
  const lanIndices = [];

  for (let i = 0; i < lanCount; i++) {
    hosts.push(parseInt(prompt(`Nhập số lượng host cho LAN${i + 1}:`), 10));
    lanIndices.push(i + 1);
  }

  return {
    networkAddress: ip,
    initialSubnetBits: initialSubnetBits,
    lanCount: lanCount,
    hosts: hosts,
    lanIndices: lanIndices
  };
}

// Cấu hình router
function copyConfig() {
  console.log("--------------------------------- Config --------------------------------");
  console.log("--- Router 1 ---");
  console.log("enable");
  console.log("config terminal");
  console.log("interface gig0/0");
  console.log("ip address Network Address Host 1 + 1 Subnet Mask Host 1");
  console.log("no shut");
  console.log("interface gig0/1");
  console.log("ip address Network Address Host 3 + 1 Subnet Mask Host 3");
  console.log("no shut");
  console.log("exit");
  console.log("ip route (Network Address Host 2) (Subnet Mask Host 2) (ip_R2_gần_R1)");
  console.log("exit");
  console.log("copy running-config startup-config");

  console.log("--- Router 2 ---");
  console.log("enable");
  console.log("config terminal");
  console.log("interface gig0/0");
  console.log("ip address Network Address Host 1 + 1 Subnet Mask Host 1");
  console.log("no shut");
  console.log("interface gig0/1");
  console.log("ip address Network Address Host 3 + 1 Subnet Mask Host 3");
  console.log("no shut");
  console.log("exit");
  console.log("ip route (Network Address Host 1) (Subnet Mask Host 1) (ip_R1_gần_R2)");
  console.log("exit");
  console.log("copy running-config startup-config");
}


function calculateVLSM() {
  const networkAddress = document.getElementById('networkAddress').value;
  const cidr = parseInt(document.getElementById('cidr').value);
  const lanInputs = document.getElementsByClassName('lanHosts');

  let hosts = [];
  for (let i = 0; i < lanInputs.length; i++) {
    hosts.push(parseInt(lanInputs[i].value));
  }

  let result = "";
  let subnetAddress = networkAddress;

  for (let i = 0; i < hosts.length; i++) {
    subnetAddress = calculateSubnet(subnetAddress, hosts[i], `LAN${i + 1}`, cidr);
    result += `--- LAN${i + 1} ---\nNetwork Address: ${subnetAddress}\n\n`;
  }

  // Thêm đoạn cấu hình router sau khi tính toán
  const routerConfig = `
--------------------------------- Config --------------------------------
--- Router 1 ---
enable
config terminal
interface gig0/0
ip address Network Address Host 1 + 1 Subnet Mask Host 1
no shut
interface gig0/1
ip address Network Address Host 3 + 1 Subnet Mask Host 3
no shut
exit
ip route (Network Address Host 2) (Subnet Mask Host 2) (ip_R2_gần_R1)
exit
copy running-config startup-config

--- Router 2 ---
enable
config terminal
interface gig0/0
ip address Network Address Host 1 + 1 Subnet Mask Host 1
no shut
interface gig0/1
ip address Network Address Host 3 + 1 Subnet Mask Host 3
no shut
exit
ip route (Network Address Host 1) (Subnet Mask Host 1) (ip_R1_gần_R2)
exit
copy running-config startup-config
`;

  result += routerConfig;

  document.getElementById('result').innerText = result;
}
// Thêm cấu hình Router vào sau khi tính toán VLSM
function addRouterConfig() {
  const routerConfig = `
  --------------------------------- Config --------------------------------<br>
  --- Router 1 ---<br>
  enable<br>
  config terminal<br>
  interface gig0/0<br>
  ip address (Network Address Host 1 + 1) (Subnet Mask Host 1)<br>
  no shut<br>
  interface gig0/1<br>
  ip address (Network Address Host 3 + 1) (Subnet Mask Host 3)<br>
  no shut<br>
  exit<br>
  ip route (Network Address Host 2) (Subnet Mask Host 2) (ip_R2_gần_R1)<br>
  exit<br>
  copy running-config startup-config<br><br>

  --- Router 2 ---<br>
  enable<br>
  config terminal<br>
  interface gig0/0<br>
  ip address (Network Address Host 2 + 1) (Subnet Mask Host 2)<br>
  no shut<br>
  interface gig0/1<br>
  ip address (Network Address Host 3 + 1) (Subnet Mask Host 3)<br>
  no shut<br>
  exit<br>
  ip route (Network Address Host 1) (Subnet Mask Host 1) (ip_R1_gần_R2)<br>
  exit<br>
  copy running-config startup-config<br>
  `;

  document.getElementById('result').innerHTML += routerConfig;
}

// Main VLSM Calculation
function calculateVLSM() {
  const ipWithCidr = document.getElementById('networkAddress').value;
  const [networkAddress, cidr] = ipWithCidr.split('/');
  const initialSubnetBits = parseInt(cidr, 10);
  const lanCount = parseInt(document.getElementById('lanCount').value, 10);

  const hosts = [];
  const lanIndices = [];

  for (let i = 1; i <= lanCount; i++) {
    hosts.push(parseInt(document.getElementById(`lan${i}`).value, 10));
    lanIndices.push(i);
  }

  // Clear the result area before new calculation
  document.getElementById('result').innerHTML = '';

  // Sort LANs by number of hosts
  sortLans(hosts, lanIndices);

  // Divide subnets and calculate
  divideSubnets(networkAddress, hosts, lanIndices, initialSubnetBits);

  // Thêm cấu hình Router vào kết quả
  addRouterConfig();
}

// Chương trình chính
function main() {
  const inputData = getInput();
  sortLans(inputData.hosts, inputData.lanIndices);
  divideSubnets(inputData.networkAddress, inputData);
  copyConfig();
}

// Gọi chương trình chính
main();
