"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'


const page = () => {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const Generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)


      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_LOCAL_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        alert(result.message)
        console.log(result)
      })

      .catch((error) => console.error(error));
  }


  return (
    <div className="p-10">
      <div className='flex items-center justify-center flex-col border border-green-400  max-w-lg mx-auto py-8 bg-green-100 p-5  rounded-xl gap-6'>
        <h1 className='text-2xl font-semibold text-green-900'>Generate your short URL's</h1>
        <form action="" className="text-center flex items-center justify-center flex-col gap-4">
          {/* First input feild for URL */}
          <div className="">
            <label htmlFor="url"></label>
            <input name='url' type="text" placeholder='Enter Your URL' onChange={(e) => setUrl(e.target.value)} className="px-5 w-96 py-2 rounded-lg" />
          </div>

          {/* Second input feild for Changed URL */}
          <div className="">
            <label htmlFor="url"></label>
            <input name='url' type="text" placeholder='Enter Your Prefered URL' onChange={(e) => setShortUrl(e.target.value)} className="px-5 w-96 py-2 rounded-lg" />
          </div>
        </form>
        <button onClick={Generate} className=" bg-green-500 w-80 text-xl font-bold text-white px-6 py-2 rounded-lg shadow-xl border-2 hover:bg-green-600 hover:scale-110">Generate</button>

        {generated && <div className="flex items-center justify-center flex-col gap-4">
          
          <Link href={generated} target="_blank" className="text-green-900 hover:underline">{generated}</Link>
          <button onClick={() => navigator.clipboard.writeText(generated)} className="bg-green-500 w-80 text-xl font-bold text-white px-6 py-2 rounded-lg shadow-xl border-2 hover:bg-green-600 hover:scale-110">Copy</button>
        </div>}
      </div>

    </div>
  )
}

export default page
