import Image from 'next/image';

type DetailsProps = {
    backgroundColor: string;
    description: string;
    groupName: string;
    ingredients: string;
    glutenFree: boolean;
    kosher: boolean;
}

export default function Details(props: DetailsProps) {
    const { backgroundColor, description, groupName, ingredients, glutenFree, kosher } = props;

    return (
        <div className='p-8 lg:p-12 text-white' style={{ background: backgroundColor }}>
            <p className="text-xl lg:text-2xl font-semibold mb-4">
              {description}
            </p>

            <p className="mb-6 font-semibold text-base lg:text-lg">
              Flavours: {groupName}
            </p>

            <p className="mb-8 text-sm">
              Ingredients: {ingredients}
            </p>

            <div className="flex items-center gap-4">
                {glutenFree && <Image src="/gluten-free.png" alt="Gluten Free" width={48} height={48} />}
                {kosher && <Image src="/kosher.png" alt="Kosher" width={48} height={48} />}
            </div>
          </div>
    );
};