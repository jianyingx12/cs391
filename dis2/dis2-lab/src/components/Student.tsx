type StudentProps = {
    name: string;
    rating: number;
    title: string;
};

export function Student({ name, rating, title }: StudentProps) {
    return (
        <div style={{ backgroundColor: "lightblue" }}>
            <h3>Name: {name}</h3>
            <p>Rating: {rating}/100</p>
            <p>Title: {title}</p>
        </div>
    );
}