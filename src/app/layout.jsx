// layout.jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Poppins, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
