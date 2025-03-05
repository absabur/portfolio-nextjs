'use client'
import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const SocialClient = () => {
  return (
    <div className="social-icons">
          <button          
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/md-abdus-sabur-54a490353/",
                "_blank"
              )
            }
            className="button2 social-link"
          >
            <FaLinkedin /> LinkedIn
          </button>
          <button
            
            
            onClick={() => window.open("https://github.com/absabur", "_blank")}
            className="button2 social-link"
          >
            <FaGithubSquare /> GitHub
          </button>
        </div>
  )
}

export default SocialClient