import Image from "next/image";

export default function Home() {
  return (

    <>
    // 1. Global.css is the Styling file that is applied to all the pages So you can place global styles in it
      // 2. You can create a styling file for a specific component and import it in that component
      // 3. You can also use styled JSX for styling in Next.js which is a CSS-in-JS solution that allows you to write encapsulated CSS in your components. note that styled jsx is only available in client component
      <div className="styleJSX">I am styling using styled JSX

        {/* you can also globalize that styling using global > */}
      <style>
        {
          `
        .styleJSX{
          color: red;
          font-size: 20px;
          background-color: yellow;
        }  

        `
        }
      </style>
      </div>

      {/* This styling is applied where the class  styleJSX is used uper than the mention styles see below the class styleJSX is not working*/}
      <p className="styleJSX">i am a paragraph where the class styleJSX is not woking because i am below its defination</p>
      
    </>


  );
}
