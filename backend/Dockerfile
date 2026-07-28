# STAGE 1: Build stage (Compiles your Java code)
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy pom.xml and download project dependencies
COPY pom.xml .
COPY src ./src

# Package the application into an executable .jar file (skipping unit tests for fast build)
RUN mvn clean package -DskipTests


# STAGE 2: Production stage (Lightweight runtime environment)
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy ONLY the built .jar file from Stage 1 (keeps the final image tiny and fast)
COPY --from=build /app/target/*.jar app.jar

# Inform Docker that the app listens on port 8080 inside the container
EXPOSE 8080

# Command to launch the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]