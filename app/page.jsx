export default function Home() {
  return (
    <div className="bg-foreground mx-auto flex h-screen max-w-[1200px] items-center justify-center">
      <div className="border-gundam-blue border-4 p-4">
        <h1 className="font-orbitron text-compliment text-6xl">
          {"[ 01 // "}
          <span className="text-gundam-blue font-bold">HELLO WORLD</span>
          {" ]"}
        </h1>
        <p className="font-inter text-compliment-two text-4xl">
          This is some sample text!
        </p>
        <div className="bg-gundam-yellow my-4 h-10 w-10"></div>
        <button className="text-gundam-blue border-gundam-blue font-orbitron hover:text-gundam-red hover:border-gundam-red border-4 p-2 text-4xl font-bold hover:cursor-pointer">
          CLICK ME
        </button>
      </div>
    </div>
  );
}
