
export default function NovaWallet() {
  return (
    <div style={{
      background: "#101827",
      color: "white",
      minHeight: "100vh",
      padding: "25px",
      fontFamily: "Arial"
    }}>
      <h1>NOVA Wallet</h1>
      <p>Your Digital Wallet</p>

      <div style={{
        background: "#1d2b45",
        padding: "25px",
        borderRadius: "18px"
      }}>
        <p>Total Balance</p>
        <h1>100 NOVA</h1>
        <p>≈ $0.00</p>
      </div>

      <h3>Wallet Actions</h3>
      <button>Receive</button>
      <button>Send</button>

      <h3>Mining Rewards</h3>
      <p>+10 NOVA</p>

      <h3>Transactions</h3>
      <p>Wallet created successfully</p>
    </div>
  );
}

