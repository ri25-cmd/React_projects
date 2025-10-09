import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

// Single FAQ item
const FaqItem = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);

  return (
    <div
      onClick={toggle}
      style={{
        border: "none",
        paddingTop: "12px",
        paddingBottom:"30px",
        borderRadius: "8px",
        cursor: "pointer",
        textAlign: "left",
        userSelect: "none",
        borderBottom:"1px dashed #c6c5c5ff",
        transition: "all 0.3s ease",
        width:400
        
      }}
    >
      <p style={{ margin: 0, 
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        marginTop: "10px",
       color: "#146252"
     }}>{question}</p>
      {isVisible && <div style={{ marginTop: "10px", color: "#146252",  fontFamily: 'Inter, sans-serif',  fontWeight: 400, fontSize:12}}>{answer}</div>}
    </div>
  );
};

// FAQ container
const Faqs = ({ faqItems }) => {
  return (
    <>
      <div style={{display:"flex", justifyContent:"center", alignItems:"flex-start", gap:"10rem",marginTop:"2rem", paddingBottom: "5rem"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems: "flex-start", justifyContent:"flex-start",  position: "relative",top: "0"}}>
          <p style={{
            margin:5, 
            color:"#0d4137ff",
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: "1.1rem",
          }}>Whatever plant</p>
          <p style={{
            margin:5, 
            color:"#0d4137ff",
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: "1.1rem",
          }}>we got you covered.</p>
        </div>
        <div style={{ margin: 10, width: "420px" }}>
          {faqItems.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </>
  );
};

// Top section
function Top({faqItems}) {

  const [visible, setVisible] = useState(false);
  
  function toggleVisible (){
    setVisible(!visible);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15rem" }}>
        <button
          style={{
            padding: 4,
            borderRadius: 20,
            width: 60,
            border: "none",
            backgroundColor: "#0d4137ff",
            color: "#fff8d7ff",
            fontSize: 12,
            fontFamily: "Inter, sans-serif",
          }}
        >
          MENU
        </button>
        <h2 style={{ fontFamily: "Michroma, sans-serif", fontWeight: 500, fontSize: "2rem", color:"#146252" }}>Plantae</h2>
        <button style={{
          padding:4,
          width:140,
          fontSize:12,
          borderRadius:20,
          border:"1px solid #0d4137ff",
          color:"#0d4137ff"
        }}>Download App</button>
      </div>
      <div style={{fontFamily: 'Inter, sans-serif', display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginTop:"5rem", marginBottom:"2rem"}}>
        <p style={{ 
          margin: "8px 0" ,
          fontWeight:800,
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          color:"#0e453aff",
          fontSize:"3rem"
        }}>YOU HAVE QUESTIONS</p>
        <p style={{ 
          margin: "8px 0",
          fontWeight:800,
          fontFamily: 'Playfair Display, serif',
          color:"#0d4539ff",
          fontSize:"3rem"
        }}>
          WE HAVE <FontAwesomeIcon icon={faCommentDots} /> ANSWERS
        </p>
      </div>
      <div style={{ 
        display: "flex", 
        gap: "40rem", 
        justifyContent: "center", 
        alignItems: "center", 
        borderBottom:"1px dashed #c6c5c5ff",
        padding:25,
        width:800,
        margin: "0 auto",
        }}>

        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 300,
          fontSize:12,
          color:"#146252"
        }}>Scroll to explore</div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FontAwesomeIcon icon={faArrowDown} style={{color:"#146252"}} onClick={toggleVisible} />
          {visible && (
            <div style={{ marginTop: "2rem" }}>
              <Faqs faqItems={faqItems} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Main App
function App() {
  const faqItems = [
    { question: "Is Plantae free to use?", answer: "Yes, Plantae is completely free for basic use. Some premium features may require payment." },
    { question: "Do I need an account to use Plantae?", answer: "You can explore most features without an account, but creating one gives you a personalized experience." },
    { question: "Can I contribute my own questions and answers?", answer: "Yes! Plantae allows users to submit questions and answers to help the community." },
    { question: "Is my data safe on Plantae?", answer: "Absolutely. We prioritize user privacy and follow industry-standard security practices." },
    { question: "Which devices can I use Plantae on?", answer: "Plantae works on web, Android, and iOS devices." },
    { question: "How often is content updated?", answer: "New answers and features are added regularly to keep the platform up-to-date." },
    { question: "Who can I contact for support?", answer: "You can reach out via the 'Contact Us' button in the app or website for any help." },
  ];

  return (
    <>
      <div style={{backgroundColor:"#f0efedff", margin:0, padding:0}}>
        <Top />
        <Faqs faqItems={faqItems} />
      </div>
    </>
  );
}

export default App;
