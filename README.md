# Bowling League Application

This application displays information about bowlers from the Marlins and Sharks teams in a bowling league database.

## Project Structure

The project consists of two main parts:

1. **ASP.NET Core API (Mission10_API)**
   - Provides data from a SQLite database
   - Filters bowlers to only show those from the Marlins and Sharks teams
   - Includes models for Bowlers and Teams
   - Uses Entity Framework Core for database access

2. **React Frontend (mission10_frontend)**
   - Displays bowler information in a table
   - Shows bowler name, team name, address, city, state, zip, and phone number
   - Uses Axios to fetch data from the API
   - Styled with Bootstrap and custom CSS

## How to Run

### Backend API
1. Navigate to the Mission10_API directory
2. Run `dotnet run` to start the API server
3. The API will be available at http://localhost:5149

### Frontend
1. Navigate to the mission10_frontend directory
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. The frontend will be available at http://localhost:3000

## API Endpoints

- `GET /bowling` - Returns all bowlers with their team information
- `GET /bowling/filter` - Returns only bowlers from the Marlins and Sharks teams

## Technologies Used

- ASP.NET Core 8
- Entity Framework Core
- React
- Vite
- Axios
- Bootstrap
- SQLite

## Author

Miles Blake
