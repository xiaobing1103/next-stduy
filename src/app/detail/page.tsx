import React from 'react'
import cat from '@/images/12.jpg'
import role_02 from '@/images/role_02.jpg'
import Hero from '@/components/hero'
export default function Detail() {
    return (
        <div>
            <div>
                <Hero imgData={role_02} imgAlt='图片占位' title='Detail路由图片标题2' />
            </div>
        </div>
    )
}
