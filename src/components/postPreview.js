import * as React from 'react'
import Navbar from './navbar';
import SideFeed from './sideFeed'

const PostPreview = ({ post }) => {
  const { title, slug, author, date, type } = post.frontmatter;
  const { excerpt, timeToRead } = post;
  return (
    <div>
      <div>
        <a className="inline-block">
          <span
            className="bg-indigo-100 text-indigo-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
          >
            {type}
          </span>
        </a>
      </div>
      <a href={slug} className="block mt-4">
        <p className="text-xl font-semibold text-gray-900">{title}</p>
        <p className="mt-3 text-base text-gray-500">{excerpt}</p>
      </a>
      <div className="mt-4 flex items-center">
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime={date}>{date}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{timeToRead} min read 📖</span>
        </div>
      </div>
      <div className="border-b-4 border-gray-100 pb-2 w-5/6 sm:w-3/4 lg:w-1/2 xl:w-2/5"/>
    </div>
  )
}

export default PostPreview