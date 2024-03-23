Cấu hình application.properties (sqlserver)
spring.application.name=demo
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=??????;encrypt=false
spring.datasource.username=sa
spring.datasource.password=12345
spring.datasource.driverClassName=com.microsoft.sqlserver.jdbc.SQLServerDriver
# C?u hình Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.SQLServerDialect
