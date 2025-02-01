import PropTypes from "prop-types";

const emojis = [
    {emoji: "🥴", label: "Bad"},
    {emoji: "🙂", label: "Okey"},
    {emoji: "😊", label: "Good"},
    {emoji: "🤗", label: "Great"},
    {emoji: "😆", label: "Excelent"},
]

export function Rating ({ rating=0, children }) {
    const item = emojis[rating];
    return (
        <div className="flx justify-center space-x-4">
            <h4 className="text-muted">{children}</h4>
            {item.emoji}
        </div>
    )
}

Rating.prototypes = {
    children: PropTypes.element,
    rating: PropTypes.number,
}

