

export default function NovaWallet() {
  return (
    <div style={{
      background: "#101827",
      color: "white",
      minHeight: "100vh",
      padding: "24px",
      fontFamily: "Arial"
    }}>
      <h1>NOVA Wallet</h1>
      <p>Digital Wallet</p>

      <div style={{
        background: "#243550",
        padding: "24px",
        borderRadius: "16px"
      }}>
        <p>Total Balance</p>
        <h1>0 NOVA</h1>
      </div>

      <h3>Wallet Actions</h3>
      <button>Receive</button>
      <button>Send</button>

      <h3>Mining Rewards</h3>
      <p>0 NOVA</p>

      <h3>Transactions</h3>
      <p>No transactions yet</p>
    </div>
  );
}
