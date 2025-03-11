import React from 'react';

function BowlerList({ bowlers }) {
  return (
    <div className="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((bowler) => (
            <tr key={bowler.bowlerID}>
              <td>
                {bowler.bowlerFirstName}{' '}
                {bowler.bowlerMiddleInit ? bowler.bowlerMiddleInit + '. ' : ''}
                {bowler.bowlerLastName}
              </td>
              <td>{bowler.team?.teamName}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlerList;
