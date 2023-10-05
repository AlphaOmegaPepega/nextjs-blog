import Link from 'next/link'
import React from 'react'

function Welcome() {
  return (
    <section>
<header className='text-center mt-12'>
  <h1 className='text-white text-7xl '>Welcome to the Learnings page!
</h1>

</header>
<section className='text-justify text-white text-4xl p-10 mt-18'>
<article className='p-5'>
<p>Please make sure you have completed the full test at least once before using this page.
   Here on this page you can complete just some segments of the test when you feel you have become more skilful in a specific area.
    While we encourage you to take the full test at least once a year, we also understand that it is very time consuming to do so.
     So therefore we created this segment to add skills one by one.
</p>
 

</article>


<article className='p-5'>

<p>
  To update the skills in a specific area make a selection on the left side by clicking the menu.
   You will see a questionnaire pop up. The blue radio buttons signify the answers you gave when you last filled the test.
    Please select the answers that reflect your current skillset the best and save.
  </p>

</article>
</section>
<footer className='text-center  mt-24'>
<Link href='/main/add/1' className='text-white bg-pink-600 text-2xl  text-center p-8 px-28 rounded-full'>Add skills</Link>

</footer>
</section>
  )
}

export default Welcome