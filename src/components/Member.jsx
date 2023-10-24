export const Member = ({ src, name, username, country }) => {
    return (
        <div className="integrante-card">
            <img src={ src } alt="Integrante" />
            <div className="integrante-info">
                <p className="integrante-nombres">{ name }</p>
                <p>{ username }</p>
                <p className="integrante-pais">{ country }</p>
            </div>
        </div>
    )
}
