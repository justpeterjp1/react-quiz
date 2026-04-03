import ImgLogo from '../assets/quiz-logo.png'
export default function Header() {
    return (
    <header>
        <img src={ImgLogo} alt="Quiz Logo" />
        <h1>ReactQuiz</h1>
    </header>
    )
}