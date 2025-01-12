import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Container, Feedback } from './styles';

export const Feedbacks = () => {
    const { t } = useTranslation()

    const feedbacks = [
        { 
            avatarUrl: "https://media.istockphoto.com/id/638756792/pt/foto/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=nahL_uo1eM1c5-rECuRU-L0MExyy9p1FFWEqTpaazYg%3D",
            name: "Isabela Fonseca",
            feedback: "A equipe da Uzzo entendeu exatamente o que precisávamos e transformou nossas ideias em um site incrível. Profissionalismo e criatividade de sobra!"
        },
        { 
            avatarUrl: "https://media.istockphoto.com/id/638756792/pt/foto/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=nahL_uo1eM1c5-rECuRU-L0MExyy9p1FFWEqTpaazYg%3D",
            name: "Mariana Rosa",
            feedback: "Usar o sistema da Uzzo fez uma grande diferença no meu dia a dia. Antes, eu perdia muito tempo com planilhas e controle manual. Agora, consigo visualizar tudo de forma prática e até gerar relatórios em poucos cliques. Recomendo para qualquer negócio que queira melhorar a gestão!"
        },
        { 
            avatarUrl: "https://media.istockphoto.com/id/638756792/pt/foto/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=nahL_uo1eM1c5-rECuRU-L0MExyy9p1FFWEqTpaazYg%3D",
            name: "Paulo Souza",
            feedback: "A Uzzo superou minhas expectativas! Além do ótimo controle de estoque, o suporte é excelente e sempre rápido para responder. Vale cada centavo, especialmente pela facilidade de atualizar ou excluir dados. Perfeito para pequenas e médias empresas!"
        },
        { 
            avatarUrl: "https://media.istockphoto.com/id/638756792/pt/foto/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=nahL_uo1eM1c5-rECuRU-L0MExyy9p1FFWEqTpaazYg%3D",
            name: "João Silva",
            feedback: "O trabalho deles é impressionante! Conseguiram trazer um conceito visual único e relevante para a nossa marca."
        },
        { 
            avatarUrl: "https://media.istockphoto.com/id/638756792/pt/foto/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=nahL_uo1eM1c5-rECuRU-L0MExyy9p1FFWEqTpaazYg%3D",
            name: "Ana Souza",
            feedback: "A consultoria de marketing digital fez toda a diferença nos nossos resultados. Recomendo demais!"
        },
        { 
            avatarUrl: "https://media.istockphoto.com/id/638756792/pt/foto/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=nahL_uo1eM1c5-rECuRU-L0MExyy9p1FFWEqTpaazYg%3D",
            name: "Carlos M",
            feedback: "A Uzzo tem sido fundamental para a organização do estoque da minha empresa! O sistema é intuitivo e fácil de usar, e a análise dos dados é super detalhada. Com certeza, ajudou a otimizar nosso tempo e a ter mais clareza sobre nossos produtos."
        },
    ]

    return (
        <Container id="feedbacks">
            <h1>{t("feedbacks.title")}</h1>
            <p>{t("feedbacks.description")}</p>

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