'use client'

import React from 'react'
import { v4 as uuid } from 'uuid'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'



const topics = [
  {
    id: uuid(),
    name: 'Python',
    img: "/py.png",
    desc: "Will discuss everything related to Python."
  },
  {
    id: uuid(),
    name: 'JavaScript',
    img: "/js.png",
    desc: "Explore the world of JavaScript, from basics to advanced concepts."
  },
  {
    id: uuid(),
    name: 'React',
    img: "/react.png",
    desc: "Dive into React, a powerful library for building user interfaces."
  },
  {
    id: uuid(),
    name: 'NodeJS',
    img: "/node.png",
    desc: "Learn about backend development using Node.js and its ecosystem."
  },
  {
    id: uuid(),
    name: 'Cybersecurity',
    img: "/cyber.jpg",
    desc: "Understand the fundamentals of cybersecurity and ethical hacking."
  },
  {
    id: uuid(),
    name: 'DataScience',
    img: "/ds.png",
    desc: "Discuss the concepts of data analysis, visualization, and machine learning."
  }
]

const Forums = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Discussion Forums
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic, index) => (
          <motion.li
            key={topic.id}
            className="bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 rounded-full p-3 mr-4">
                  <Image
                    width={40}
                    height={40}
                    src={topic.img}
                    alt={`${topic.name} icon`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{topic.name}</h2>
              </div>
              <p className="text-gray-600 flex-grow">{topic.desc}</p>
              <Link href={`/discuss/${topic.name}-${topic.id}`}>
                <Button className="mt-6">
                  Join Discussion
                </Button>
              </Link>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Forums

