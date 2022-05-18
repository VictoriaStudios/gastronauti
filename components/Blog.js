import { forwardRef, useState, useRef } from 'react'
import { scrollTo } from '../utilities/scrollTo'
import styles from '../styles/Blog.module.css'
import Transition from 'react-transition-group/cjs/Transition'
import { Card } from './Card'
import Carousel from './Carousel'



const Blog = (props, ref) => {
    const [expanded, setExpanded] = useState(false)
    const transTime = 550
    const expandtime = 300
    const blogRef = useRef()

    const handleBlogClick = () => {
        if (!expanded) scrollTo(ref)
        setExpanded(!expanded)
    }




    return (
        <Transition in={expanded} timeout={transTime}>
            {state => (
                <>
                    <section ref={blogRef} className={styles.blogWrapper}>
                        <h1 onClick={handleBlogClick} className={styles.blogTitle}>
                            <p style={{display:'inline'}}>{">>> "}</p>
                            Blog
                            <p style={{display:'inline'}}>{"<<< "}</p>
                            </h1>
                        <div className={styles.blogContent} style={{
                            transition: `all ${expandtime}ms linear`,
                            height: state === 'entering' ? '0' : state === 'entered' ? '75vh' : state === 'exiting' ? '0' : state === 'exited' ? '0' : null,
                            width: state === 'entering' ? '80vw' : state === 'entered' ? '80vw' : state === 'exiting' ? '80vw' : state === 'exited' ? '10vw' : null,
                        }}>
                            <div
                                style={{
                                    transition: `all ${transTime}ms ease-in`,
                                    opacity: state === 'entering' ? '0.2' : state === 'entered' ? '1' : state === 'exiting' ? '0.2' : state === 'exited' ? '0' : null,
                                    height: '100%'
                                }}>
                                <Carousel>
                                    <Card noHover={true} cardWidth={450}>
                                        <h3>Table ordering made easy!</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptatem rem animi, incidunt quos, iusto cumque hic perspiciatis assumenda harum sequi optio autem omnis culpa. Voluptates aspernatur est autem eveniet tempora, laudantium eum voluptate possimus veniam ipsam quidem fugit sit, quaerat fugiat iusto suscipit enim nemo cupiditate dignissimos ipsa velit veritatis. Dolorum eum rerum fuga natus dolor architecto sint obcaecati, quisquam commodi libero fugit quo voluptatibus amet inventore accusamus repellendus tempore sit officia consequatur vero minima culpa. Sit nemo tempora ullam est quisquam quidem praesentium dolores eos reiciendis amet! Debitis iusto autem labore distinctio dignissimos voluptates totam in dicta, officiis nostrum nisi dolore, omnis, nulla sequi amet aspernatur hic. Voluptates quaerat perspiciatis nostrum? Repudiandae blanditiis dicta ex doloremque! Aspernatur repudiandae minus atque sequi fugit doloremque enim, nemo vitae ullam quia beatae ratione maiores quidem non ea itaque nisi? Sit natus totam accusantium temporibus qui placeat eaque vero suscipit aut, id at! Possimus enim aliquam mollitia aperiam repudiandae nam praesentium ut doloremque sit animi nisi odio, impedit iusto eligendi molestiae reiciendis dolorum consequuntur voluptas reprehenderit magnam alias corrupti sint laudantium? Pariatur at sunt nobis dicta natus! Quidem quasi amet itaque magni iure id unde facilis cupiditate non atque molestias, eaque omnis quae enim voluptates voluptate ex laboriosam officiis soluta provident illum. Facilis, atque natus quidem architecto est provident quo dignissimos amet nesciunt, quod minima accusantium tenetur alias consectetur laborum ipsam nobis iusto, itaque voluptatem. Ab quam quis iusto odit corrupti tempora vero quaerat accusamus quidem laboriosam iste, laudantium id fugit voluptatem voluptate recusandae animi dicta! Ut.</p>
                                    </Card>
                                    <Card noHover={true} cardWidth={450}>
                                        <h3>One-Touch Stock Replenishment</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam atque earum minus saepe nam porro libero omnis odio sed, perferendis dolorum quis dicta quasi natus nisi, quibusdam velit id excepturi? Suscipit ratione nesciunt autem expedita veniam magnam, repudiandae vitae animi, iusto pariatur mollitia assumenda officiis quas voluptatem at esse. Est fuga veniam porro voluptas deserunt. Reprehenderit maiores exercitationem soluta quidem quam quasi dolores, doloribus corporis officiis sunt, recusandae, aspernatur aliquam culpa! Commodi, ad architecto. Perspiciatis explicabo voluptatem aut, ex quasi cupiditate incidunt ducimus. Itaque ullam, perspiciatis reiciendis magni quo quaerat ut vitae laborum molestiae modi voluptatem illo ea in eius beatae adipisci sint qui aperiam minus sunt. Tenetur commodi corporis voluptas voluptatibus, dolor sapiente deleniti! Nam quod hic maiores ipsum, quia vero amet eum excepturi, mollitia asperiores dolores at facere minus deserunt sunt laborum cum? Provident voluptas, totam quae sit sunt voluptatum ducimus impedit sapiente obcaecati, commodi cumque laudantium dicta. Voluptate nihil doloremque delectus explicabo libero molestias nobis illum magnam error, aut saepe, repellat quidem velit facere id deleniti molestiae! Eligendi, voluptates ad architecto commodi, non culpa ipsam quibusdam reiciendis unde aspernatur dicta quis soluta eaque ea quos quia, recusandae nobis iste odit repudiandae nam! Laborum, tempora nulla deleniti optio voluptatem neque beatae inventore repellat? Provident consequuntur at minus suscipit recusandae ipsa obcaecati quae voluptatum aspernatur necessitatibus repudiandae, facere quasi quidem illo perferendis velit facilis? Accusantium fugiat quos laudantium voluptate autem a sed deleniti similique obcaecati quasi voluptatum magnam dolor corrupti rem qui alias ipsa, placeat explicabo neque nihil enim eum laborum fuga. Delectus, officia dolor saepe ut doloribus minus voluptate laborum? Recusandae accusantium ducimus molestiae mollitia necessitatibus aliquid harum obcaecati autem excepturi fuga, id minima voluptate est reprehenderit tempora explicabo officiis provident debitis nihil fugiat iusto dignissimos possimus accusamus dolor! Aliquam similique provident impedit aspernatur illo. Ab, delectus.</p>
                                    </Card>
                                    <Card noHover={true} cardWidth={450}>
                                        <h3>Easy synch from anywhere</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus, impedit incidunt hic ipsa illum saepe omnis deleniti. Nemo distinctio consequatur doloremque ea ab quo modi impedit assumenda ullam quia perspiciatis voluptate, quae voluptas animi blanditiis debitis harum quam totam illo nihil quod fuga nisi libero iste. Cupiditate adipisci similique, quam mollitia consequatur magnam ut. Nobis harum nesciunt vel dignissimos officia quibusdam velit minus. Dolorum asperiores distinctio veritatis alias at beatae repellat dicta neque? Perspiciatis earum magnam nobis, voluptatem deleniti, consequatur repudiandae quo recusandae fuga praesentium maxime minima quibusdam facere eius esse cum explicabo dolor. Explicabo repudiandae et expedita laborum, maiores placeat minima blanditiis iusto?</p>
                                    </Card>
                                    <Card noHover={true} cardWidth={500}>
                                        <h3>Welcome to the gastronauti blog</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptas id deleniti, dolores est fuga itaque magni hic similique nisi, sint maiores beatae omnis? Fugit magnam quasi enim voluptates ad quia totam eaque. Voluptatem necessitatibus saepe odit? Quas saepe cupiditate nemo blanditiis adipisci inventore, odit, animi perferendis omnis, tempora ducimus officia voluptates earum dolor iste possimus laboriosam asperiores quam qui ipsum laudantium quis? Animi rerum ipsam dolorem maiores eos aut doloremque, eveniet culpa unde expedita.</p>
                                    </Card>
                                </Carousel>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </Transition>
    )
}

export default forwardRef(Blog)
