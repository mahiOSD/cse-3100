import "./AboutUs.css"; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Purrfect Paws Adoption Agency, we are committed to finding forever
          homes for cats in need and providing support to cat owners and adopters. Our
          mission is to make the adoption process easy, compassionate, and safe, while
          ensuring that each cat is placed in a loving environment where they can thrive.
        </p>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <p>
          Founded in 2023, Purrfect Paws Adoption Agency has been dedicated to
          rescuing cats and providing them with a chance to find their perfect family.
          Over the years, we have helped hundreds of cats find new homes and educated the
          community on the importance of adoption. Our history is one of love, dedication,
          and compassion for all cats in need.
        </p>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <p>
          Our team is made up of animal lovers who are passionate about rescuing and
          helping cats find their forever homes. From adoption coordinators to veterinarians,
          every member of our team plays an essential role in ensuring that cats and adopters
          have a smooth and fulfilling adoption experience.
        </p>
        <div className="team-members">
          <div className="team-member-card">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT01M8Ji4Xz1FGfMB78c1NoK1JlPGvggexjVw&s" 
              alt="Team Member 1" 
            />
            <div className="team-member-info">
              <h3>Jane Doe</h3>
              <p>Executive Director</p>
              <p>Email: <a href="mailto:jane.doe@gmail.com">jane.doe@gmail.com</a></p>
            </div>
          </div>
          <div className="team-member-card">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAhxqJjAU2kKxXKqlUz6e2k55_bB935T4Clg&s" 
              alt="Team Member 2" 
            />
            <div className="team-member-info">
              <h3>John Smith</h3>
              <p>Case Manager</p>
              <p>Email: <a href="mailto:john.smith@gmail.com">john.smith@gmail.com</a></p>
            </div>
          </div>
          <div className="team-member-card">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQHCE8dQ4ScleQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722162165861?e=2147483647&v=beta&t=ib2ooScKC84hcjKQUs2WuGmg9hOw2WD1lsszreEGGJQ" 
              alt="Team Member 3" 
            />
            <div className="team-member-info">
              <h3>Emily Johnson</h3>
              <p>Director of Operations</p>
              <p>Email: <a href="mailto:emily.johnson@gmail.com">emily.johnson@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
