import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

function SinglePage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt='' fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt='' fill className={styles.image} />
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tempore quod odio error necessitatibus ullam mollitia. Accusantium adipisci est, praesentium cum excepturi impedit fugit! Saepe provident reiciendis nulla vitae deserunt.
                        </p>
                        <h2>Lorem ipsum dolor sit amet.</h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus dolorum tenetur ducimus corrupti, quisquam, eius, et temporibus eum sapiente itaque distinctio quidem ipsum ratione enim fuga qui fugiat minus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim iure expedita quia! Harum dignissimos quod nisi iusto dolorum sunt, temporibus voluptate dolores cumque distinctio sed ipsa amet laboriosam reiciendis eius?
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage