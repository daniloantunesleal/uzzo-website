import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Container, Feedback } from './styles';

export const Feedbacks = () => {
    const feedbacks = [
        { 
            avatarUrl:  "https://media.istockphoto.com/id/638756792/pt/foto/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=nahL_uo1eM1c5-rECuRU-L0MExyy9p1FFWEqTpaazYg%3D",
            name: "Isabela Fonseca",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis tincidunt orci non suscipit. Mauris nec felis tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ac justo tempor, suscipit magna ut, dignissim nunc."
        },
        { 
            avatarUrl:  "https://media.istockphoto.com/id/638756792/pt/foto/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=nahL_uo1eM1c5-rECuRU-L0MExyy9p1FFWEqTpaazYg%3D",
            name: "Isabela Fonseca",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis tincidunt orci non suscipit. Mauris nec felis tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ac justo tempor, suscipit magna ut, dignissim nunc."
        },
        { 
            avatarUrl:  "https://media.istockphoto.com/id/638756792/pt/foto/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=nahL_uo1eM1c5-rECuRU-L0MExyy9p1FFWEqTpaazYg%3D",
            name: "Isabela Fonseca",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis tincidunt orci non suscipit. Mauris nec felis tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ac justo tempor, suscipit magna ut, dignissim nunc."
        },
        { 
            avatarUrl:  "https://media.istockphoto.com/id/638756792/pt/foto/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=nahL_uo1eM1c5-rECuRU-L0MExyy9p1FFWEqTpaazYg%3D",
            name: "Isabela Fonseca",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis tincidunt orci non suscipit. Mauris nec felis tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ac justo tempor, suscipit magna ut, dignissim nunc."
        },
        { 
            avatarUrl:  "https://media.istockphoto.com/id/638756792/pt/foto/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=nahL_uo1eM1c5-rECuRU-L0MExyy9p1FFWEqTpaazYg%3D",
            name: "Isabela Fonseca",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis tincidunt orci non suscipit. Mauris nec felis tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ac justo tempor, suscipit magna ut, dignissim nunc."
        },
    ]

    return (
        <Container id="feedbacks">
            <h1>Avaliações de clientes</h1>
            <p>Descubra o que nossos clientes têm para falar sobre suas experiências com nossos serviços e produtos</p>

            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                className="feedbacks"
            >
                {feedbacks.map((feedback, index) => (
                    <SwiperSlide className="feedback-swiper" key={index}>
                        <Feedback>
                            <img src={feedback.avatarUrl} alt="avatar" />
                            <h2>{feedback.name}</h2>
                            <p>{feedback.feedback}</p>    
                        </Feedback>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}