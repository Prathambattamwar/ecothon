// import React from "react";

// const teamMembers = [
//   {
//     img: "/assets/images/team-img1.jpg",
//     name: "Victoria Hyde",
//     role: "Senior Farmer",
//   },
//   {
//     img: "/assets/images/team-img2.jpg",
//     name: "Louis Clayton",
//     role: "Gardner",
//   },
//   {
//     img: "/assets/images/team-img3.jpg",
//     name: "Emily Greenwood",
//     role: "Senior Farmer",
//   },
//   {
//     img: "/assets/images/team-img4.jpg",
//     name: "Joshua Bevan",
//     role: "Gardner",
//   },
// ];

// const TeamSection = () => {
//   return (
//     <section className="w-100 float-left team-con plant-img">
//       <div className="container position-relative">
//         <div className="padding-top padding-bottom">
//           <div className="generic-title text-center ml-auto mr-auto">
//             <span
//               className="d-block aos-init"
//               data-aos="fade-up"
//               data-aos-duration="600"
//             >
//               Meet our Team
//             </span>
//             <h2
//               data-aos="fade-up"
//               data-aos-duration="600"
//               className="aos-init"
//             >
//               Our Trained Staff
//             </h2>
//           </div>
//           <div
//             id="team-slider"
//             className="owl-carousel owl-theme owl-loaded owl-drag aos-init"
//             data-aos="fade-up"
//             data-aos-duration="600"
//           >
//             {teamMembers.map((member, index) => (
//               <div className="item" key={index}>
//                 <div className="team-box-item text-center">
//                   <div className="team-box-img">
//                     <figure className="mb-0">
//                       <img src={member.img} alt={member.name} />
//                     </figure>
//                     <div className="social-link">
//                       <ul className="list-unstyled mb-0 d-flex justify-content-center">
//                         <li>
//                           <a href="https://www.facebook.com/">
//                             <i className="fab fa-facebook-f"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="https://twitter.com/">
//                             <i className="fab fa-twitter"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <a href="https://pk.linkedin.com/">
//                             <i className="fab fa-linkedin-in"></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <h3>
//                     <a href="/team">{member.name}</a>
//                   </h3>
//                   <span className="d-block">{member.role}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="btn-wrap">
//             <button className="prev-btn clip-each border-style-thin disabled">
//               <i className="fas fa-arrow-left"></i>
//             </button>
//             <button className="next-btn clip-each border-style-thin">
//               <i className="fas fa-arrow-right"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;