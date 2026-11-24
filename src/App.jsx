import React from 'react'

import Card from './components/Card'




const App = () => {



      
  const jobOpenings = [
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20171005153412",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Cloud Support Associate",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspi-gOAwcOraupQqxS7zuATQ33vwgBdkyN_IQANmapA&s",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Native Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAACKCAMAAACuLEdAAAAAZlBMVEX///8AAAD8/Pzz8/P39/fc3Nzs7Ozw8PAvLy/n5+fk5ORKSkrIyMiPj49ycnK8vLzU1NRsbGxFRUVZWVkaGhoTExO1tbU2NjZ7e3uZmZmCgoJQUFCkpKQgICBeXl6tra0nJyc+Pj4eoqs4AAAEeklEQVR4nO2d2YKiMBBFCRAQ2aVFWQT5/58c0G4XgtqjKXJpOM881JWkUltQ0xYWFhYWFhYW3kdXbcDYmE4ab1lgqrZjTHSeFqwjMFSbMiKev2NnYlu1LaNh5T+i5/S206toxvYz8WnrgN3iq7ZnHHhzp5plqg0aBW91r/oQqrZoDKKeatY4qk0aAX7oqWaJapNGwN70VbNUtU0jkAuq2QxC01RUnau2iR6nEGXPwKH5oupStU308J2guvj7L1vPBNVzCFXsL0H2HLKQUFDdqDZpDIRIZTWDI1vThHfNVVs0BlFftafaolHo+fFjpNqgcYjvVO/mUkC79WiHQLU1o+FeVSfhDM7rby6yv9K/H5Fe+V7kTfg3uwG6YVuWbQjLeF8kcebdRiim5aw7HEt8elLYUZhmQeVukqAMvfWTJ03u1bl7jtIPmyB7/jQ0XhY0t+468esHWqJy3w9V26fTCQarep30S8GMbTexWCE0yqQRnjwpL/yJ7XuzPg4q6Rz3nl93rm56yaMHT+QTEm5GYt3kllXG1+0Ctrk3UDnt/0r1VOI3Z6BG1meTl2XwcEXcEUwjM4sG6qEfsZlCbuaJtaJP2eKX2GrpojvAO0Q6jWrGsNd5+Dsv9QbIVQhOppq5uMGqKd+bXahVi3tM/Nr6N3Et1doeI9b7JXHwgZMSx30t4C220KlYSaQa2okPtW3lgH1kE73sLbALb7HEooIUcuR9TebGC/AyA9HOxt7Ymk2jOlat6wXiHIoU0PslzwuB74LeETRotjZ0oNLiCYPCMiiAE5ATNFs7Q2+F7Ulkg1fQND14reH/WYEf2ppF4sgT3DrSGU6SasNf/3vR83oT+AnU/qUmOcBfJPBICsXwskOSaGWRjQmNbHyXRrK3Y/Q5BhpPXqFn2zSyd+h5Z9RQyIZPRdayx1XOoN+FsysS2RV6mYEk8WQMfTSLpswAH7D8YgDvLcBTz5BofAP8YyScqPF3AI9YGhrZ6N0gmhOMoZ/dZBMcDXSEuqaSzVxob04mm61US3sGUZx20g08x+HRyWYubpDqbCl1w87RG3QDpy1H2OicbOL0jAt6kNE0hG6oIkTXZr6+0/UpkI3flNKpnYAsINs0BbUrhWqFw1Cvcsg1rmkWreodanBOln2eKFFbYnRpWMsK9ODWNJ3ydcPGaZrG6VQjT2sZRPVyBj51S9Po7sDNPTuoqg3gFVSqgjliFnILzawxdtm4oyFQnaB3fEmKapP4/Kn8ZQ59eP1gy/bmBbo/OyN8V/9DYIPxHgOfHf+A6fzzhMwYdUL/nKTLW+Yb7Kj0HkdWbP4FnHgNIGscE/vSukgtpXw8HXf2g4yZrQm5swuf14+n+c9g/pNhtZVbVFWVFM9cQI6fgAxh1sN3KbZVVnt8bRuGw706e9Qhzib5rlv0aOB9F3V0P2NnR+lQGylFLYv/AqOflsR8yEuZXHgO/X7nC/jly7bHTfXsg9xh4O623w8GExfdsS7zfL/3M+9VD8uMar8l+zvfsNYnvFEXFhYWFgD5B4WPQf2WazkjAAAAAElFTkSuQmCC",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Netflix",
    datePosted: "2 days ago",
    post: "Senior Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR219NyRGtXLVUBJC_dNea7ZjYjhB-WxZfIo_khbnNCxA&s=10",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Research Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcrwMJZx7IGVwE4RWuj5r4Aa71Mm4gvxGLwpp8QSXfA&s=10",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhxIOBdwbEGXJ4d1Vp-TNJu_0_s7ur-TqW553Idjlxw&s=10",
    companyName: "Adobe",
    datePosted: "10 weeks ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaswMAQv-oTt2vszmQni5KGAX6Ev_4fEVxv64q3oLZA&s=10",
    companyName: "Oracle",
    datePosted: "12 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Mumbai, India"
  }
];

  console.log(jobOpenings)

  return(
    <div className="parent">
      {jobOpenings.map(function(elem,idx){
       
        return <div key={idx}>
           <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandlogo={elem.brandLogo} dateposted={elem.datePosted}/>
           </div>

      })}
    </div>
  )
   
  }

export default App