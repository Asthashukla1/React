import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-16 bg-white text-center">
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
                            No posts found
                        </h1>
                        <p className="text-gray-500 text-lg">
                            Login to view or create new posts and join the discussion.
                        </p>
                    </div>
                </Container>
            </div>
        )
    }

    return (
    <div className="w-full min-h-[calc(100vh-64px)] py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <Container>
            <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center tracking-tight">
                Explore Posts
            </h1>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {posts.map((post) => (
                    <PostCard key={post.$id} {...post} />
                ))}
            </div>
        </Container>
    </div>
)
}

export default Home
