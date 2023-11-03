function TextBox(props) {
  return (
    <>
      <div className="flex flex-col mb-8 md:w-96">
        <h1 className="text-[#E982A2] font-bold text-3xl md:text-5xl mb-6">
          {props.title}
        </h1>
        <p className="text-[#96E072]">{props.text}</p>
      </div>
    </>
  );
}

export default TextBox;
