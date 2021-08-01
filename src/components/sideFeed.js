import * as React from 'react'
import { Link } from 'gatsby'

const projects = [
  {
    title: 'Serverless Quiz Game',
    link: '/projects/serverless-quizzes/',
    preview: 'I used AWS to create a serverless API for multi choice quizzes you can play with your friends online, in real time!',
  }
]

const Layout = ({ page }) => {
  return (
  <div className="p-4">
    <div className="text-gray-900 text-xl text-base">
      Projects
    </div>
    <div className="flow-root mt-6">
      <ul className="-my-5 divide-y divide-gray-200">
        {projects.map((project, index) => (
          <li key={index} className="py-5">
            <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
              <h3 className="text-sm font-semibold text-gray-800">
                <Link to={project.link} className="hover:underline focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {project.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">{project.preview}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Layout