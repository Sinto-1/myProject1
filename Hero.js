import ButtonContainer from "./ButtonContainer";
function Hero(){
    const styles = {
        background: "red",
        height: "50",
        width: "150",
        color: "white",
    };
    return (
        <header> 
            
            <div className="hero">
                <h2>Dr Sinto to the World</h2>
                <h4>Dr Sinto writes to study and know the world and its metaphysics</h4>
                <ButtonContainer style={styles} title="BOOK NOW"/>
                <footer>copyrights reserved &copy;2021</footer>
            </div>
        </header>
    );
}
export default Hero;