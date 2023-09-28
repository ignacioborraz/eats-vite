export default () => {
  return (
    <div className="bg-purple-400 text-white min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl">CODER EATS</h1>
      <h2 className="text-2xl">SIGN UP FORM</h2>
      <form className="flex flex-col">
        <input className="m-2 p-2 text-center" type="text" placeholder="Type your mail" />
        <input className="m-2 p-2 text-center" type="password" placeholder="Type your password" />
        <input className="m-2 p-2 text-center bg-white text-purple-800" type="button" value="sign up!" />
      </form>
    </div>
  );
};
