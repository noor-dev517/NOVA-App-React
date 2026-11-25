

export default function NovaWallet() {
  return (
    <div style={{
      background: "#0b1220",
      color: "white",
      minHeight: "100vh",
      padding: "25px",
      fontFamily: "Arial"
    }}>
      <h1>NOVA</h1>
      <h2>My Wallet</h2>

      <div style={{
        background: "#172b46",
        padding: "25px",
        borderRadius: "18px"
      }}>
        <p>Total Balance</p>
        <h1>0 NOVA</h1>
        <p>Digital Assets</p>
      </div>

      <h3>Wallet Actions</h3>
      <button>Receive</button>
      <button>Send</button>

      <h3>Mining Rewards</h3>
      <p>0 NOVA</p>

      <h3>Recent Transactions</h3>
      <p>No transactions yet</p>
    </div>
  );
}
