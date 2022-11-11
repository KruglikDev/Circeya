import './Block.scss';

const Block = ({firstImgBig, firstImgSmall, secondImgBig, secondImgSmall, subtitle, text}) => {
    return (<div className='block'>
        <picture className='block__img block__img_first'>
            <source srcSet={firstImgSmall} media="(max-width: 900px)" />
            <source srcSet={firstImgBig} media="(min-width: 900px)" />
            <img className='block__img block__img_first' src={firstImgBig} alt="Photo model"/>
        </picture>
        <div className="block__inner">
            <h3 className='block__subtitle'>{subtitle}</h3>
            <p className='block__text'>{text}</p>
        </div>

        <picture className='block__img block__img_second'>
            <source srcSet={secondImgSmall} media="(max-width: 900px)" />
            <source srcSet={secondImgBig} media="(min-width: 900px)" />
            <img className='block__img block__img_second' src={secondImgBig} alt="Photo model"/>
        </picture>
        <div className="block__inner block__inner_second">
            <h3 className='block__subtitle'>{subtitle}</h3>
            <p className='block__text'>{text}</p>
        </div>
    </div>)
}

export default Block;