import { useState, useRef } from 'react'
import { scrollTo } from '../utilities/scrollTo'
import styles from '../styles/Blog.module.css'
import Transition from 'react-transition-group/cjs/Transition'
import { Card } from './Card'
import Carousel from './Carousel'



const Blog = (props) => {
    const [expanded, setExpanded] = useState(false)
    const transTime = 550
    const expandtime = 300
    const blogRef = useRef()

    const handleBlogClick = () => {
        if (!expanded) scrollTo(blogRef)
        setExpanded(!expanded)
    }




    return (
        <Transition in={expanded} timeout={transTime}>
            {state => (
                <>
                    <section ref={blogRef} className={styles.blogWrapper}>
                        <h1 onClick={handleBlogClick} className={styles.blogTitle}>Blog</h1>
                        <div className={styles.blogContent} style={{
                            transition: `all ${expandtime}ms linear`,
                            height: state === 'entering' ? '0' : state === 'entered' ? '75vh' : state === 'exiting' ? '0' : state === 'exited' ? '0' : null,
                            width: state === 'entering' ? '80vw' : state === 'entered' ? '80vw' : state === 'exiting' ? '80vw' : state === 'exited' ? '10vw' : null,
                        }}>
                            <div
                                style={{
                                    transition: `all ${transTime}ms ease-outt`,
                                    opacity: state === 'entered' ? 1 : 0,
                                    height:'100%'
                                }}>
                                <Carousel>
                                    <Card noHover={true} cardwidth={400}>Card1</Card>
                                    <Card noHover={true} cardwidth={400}>Card2</Card>
                                    <Card noHover={true} cardwidth={400}>Card3</Card>
                                    <Card noHover={true} cardwidth={400}>Card4</Card>
                                </Carousel>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </Transition>
    )
}

export default Blog
