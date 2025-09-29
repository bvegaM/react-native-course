export const BasicTypes = () => {
    const name: string = 'Bryam';
    const age: number = 26;
    const isActive: boolean = false;

    const powers: string[] = ['react', 'react-native', 'Astro'];

    return (
        <>
            <h3>Tipos básicos:</h3>
            {name} - {age} - {isActive ? 'Active' : 'No Active'}

            <p>
                {powers.join(',')}
            </p>
        </>
    )
}
