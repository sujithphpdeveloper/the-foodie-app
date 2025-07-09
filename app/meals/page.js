import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";
import {error} from "next/dist/build/output/log";

export const metadata = {
    title: 'Meals Page',
    description: 'Meals listing page.',
};

async  function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}
export default function MealsPage() {
    return <>
        <header className={classes.header}>
            <h1>Meals Page</h1>
            <p>Lorem Ipsum</p>
            <p className={classes.cta}>
                <Link href='/meals/share'>Share Your Favourite Recipe</Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Fetching Meals..</p>}>
                <Meals/>
            </Suspense>
        </main>
    </>;
}