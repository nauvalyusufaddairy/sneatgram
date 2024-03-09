export default function EmailVerificationForm() {
  return (
    <div className=" flex w-full h-full  items-center justify-center">
      <div className="w-[450px] h-[320px] bg-bg30 text-label flex flex-col items-center rounded-md py-4 px-6">
        {" "}
        <div className="text-2xl mt-4 "> code verification</div>
        <form
          className="w-full mt-12"
          action={async () => {
            "use server";
          }}
        >
          <input
            className="w-full
           bg-inputBg border-[1px]
            border-inputBorder 
            text-inputTextColor 
            placeholder:text-inputPlaceHolderTextColor 
            rounded-md focus-visible:ring-1 focus-visible:outline-none
             focus-visible:ring-bg10
             px-4 py-1"
          />
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
}
