import React, { useState, useEffect } from 'react';
import './Community.css';

const Community = () => {
    const [artistName, setArtistName] = useState('');
    const [artistId, setArtistId] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Fetch comments from the server
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await fetch('http://localhost:5000/comments');
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }
            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send comment to the server
            const response = await fetch('http://localhost:5000/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    artistName: artistName,
                    artistId: artistId,
                    comment: comment
                })
            });
            if (!response.ok) {
                throw new Error('Failed to post comment');
            }
            // Clear comment form after successful submission
            setComment('');
            // Fetch updated comments from the server
            fetchComments();
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    return (
        <div className="community-page">
            <h2>Community</h2>
            <div className="back">
                <button onClick={() => window.history.back()}>Back</button>
            </div>
            <div className="comment-form">
                <h3>Post a Comment</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={artistName}
                        onChange={(e) => setArtistName(e.target.value)}
                        placeholder="Artist Name"
                    />
                    <input
                        type="text"
                        value={artistId}
                        onChange={(e) => setArtistId(e.target.value)}
                        placeholder="Artist ID"
                    />
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write your comment here..."
                    />
                    <button type="submit">Post Comment</button>
                </form>
            </div>
            <div className="comments-list">
                <h3>Comments</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <p>Artist Name: {comment.artist_name}</p>
                            <p>Artist ID: {comment.artist_id}</p>
                            <p>User Comment: {comment.comment}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Community;
