import { useState } from 'react'
import styles from '../styles/Blog.module.css'
import Transition from 'react-transition-group/cjs/Transition'



const Blog = (props) => {
    const [expanded, setExpanded] = useState(false)
    const transTime = 750
    const expandtime = 300




    return (
        <Transition in={expanded} timeout={transTime}>
            {state => (
                <>
                    <section onClick={() => setExpanded(!expanded)} className={styles.blogWrapper}>
                        <h1 className={styles.blogTitle}>Blog</h1>
                        <div className={styles.blogContent} style={{
                            transition: `all ${expandtime}ms ease-out`,
                            height: state === 'entered' ? '75vh' : '0',
                            width: state === 'entered' ? '80vw' : '10vw',
                        }}>
                            <h1 style={{
                                transition: `all ${transTime}ms ease-in`,
                                opacity: state === 'entered' ? 1 : 0
                            }}>
                                Content
                            </h1>
                        </div>
                    </section>
                </>
            )}
        </Transition>
    )
}

export default Blog
