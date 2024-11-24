function Header({ title }) {
    return (
      <div
        className="w-full"
        style={{
          background: "linear-gradient(to bottom, #03B59B, #FFFFFF 40%)", 
          height: "355px", 
        }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-[#183262]">{title}</h1> {/* Tampilkan teks yang dikirimkan */}
        </div>
      </div>
    );
  }
  
  export default Header;