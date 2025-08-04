import { TransformedRecipes } from "@/services";

type RecipesProps = {
    colorGroup: string;
    recipes: TransformedRecipes;
}

export default function Recipes({ colorGroup, recipes }: RecipesProps) {
    return (
        <div className='p-8 lg:p-12 text-white' style={{ background: colorGroup }}>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6">Recipes</h3>
              {recipes.items.length > 0 && (
                <>
                  <ul>
                    {recipes.items.map((recipe, idx) => (
                      <li key={idx} className='mb-4'>
                        <p className='text-lg font-semibold mb-2'>{recipe.name}</p>
                        <p className='text-sm'>{recipe.description}</p>
                        <p className='text-base font-semibold'>{recipe.totalTime}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
          </div>
    );
};