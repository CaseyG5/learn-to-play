
function DashboardPage( { user } ) {
  return (
    <div>
      <h3 className={"font-bold"}>Hey {user.name}, welcome{ user.lastLogin ? " back." : "." }</h3>
        <p></p>
    </div>
  );
}
export default DashboardPage;
