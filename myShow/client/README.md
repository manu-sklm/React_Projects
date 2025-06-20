

1.leading-value --for line height
2.group and group-hover 

3. what diff does it makes on adding just "transition"

<div className='flex justify-center items-center mt-20'>
               <button className='bg-primary px-10 py-3 hover:bg-primary-dull rounded-md transition text-sm font-medium  cursor-pointer'>show more</button>
</div>


#### With transition:
When you hover over the button, the background color (bg-primary → bg-primary-dull) changes smoothly over a short time 
**(default is 150ms)**.

It feels modern and polished.

You can **enhance** it by adding duration-300, ease-in-out, etc.


#### adding blur circle --gave great look
               --**blur-xl**    : it blurs it bg color
                --bg-[somecolor]
                --rounded-full

                ---**aspect-square** : this keeps the square ration i.e same width and height  , also have aspect-[16/9] etc

4. scrollTo(0,0) : scroll to top

 <button onClick={()=>{ navigate('/movies'); scrollTo(0,0); }} > click me </button> 


5. object-cover vs bg-cover

   object-cover:   **The pixel clarity was really good cz it scales**
                 used on elements like <img> <video> <iframe>
                 CSS Equivalent: object-fit: cover;

                Behavior:
                Scales the image to fill the container while maintaining its aspect ratio.

                Parts of the image might be cropped if the container's aspect ratio differs.

                <img class="object-cover w-40 h-40" src="image.jpg" />

   bg-cover    :
                 used on 	Any element with a background-image



6. Truncate
        truncate in Tailwind CSS
        
    The truncate utility is used to cut off long text with an ellipsis (...) if it overflows its container, keeping the layout clean.                 

7.  space-y-2 : space 
      
        
                    <div className='text-sm space-y-2 '>
                            <p>Home</p> 
                            <p>About us</p>
                            <p>Contact us</p>
                            <p>Privacy policy</p>
                    </div>


8.  w-max  : equilavalent to "width:max-content" 
           “Make the width just wide enough to fit the longest unbreakable content (like text or inline elements), without wrapping"


           "So w-max makes the element grow only as wide as its longest content, and not more."
     <div className='overflow-x-auto no-scroll'>
               <div className='py-10 flex gap-5  w-max'>
              {
                dummyCastsData.map((cast)=>(
                  <div className='flex-col items-center justify-center w-full '>

                    <img src={cast.profile_path} alt="profileImage" className='aspect-square  rounded-full size-20 object-center object-cover'/>
                    <p className='text-sm'>{cast.name}</p>

                  </div>

                ))
              }
             </div>                    
                        