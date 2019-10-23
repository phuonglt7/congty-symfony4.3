<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PlanetController extends AbstractController
{
//    /**
//     * @Route("/planet", name="planet")
//     */
//    public function index()
//    {
//        return $this->render('planet/index.html.twig', [
//            'controller_name' => 'PlanetController',
//        ]);
//    }

    /**
     * @Route("/planet/getPlanets", name="planet_getPlanets")
     */
    public function getPlanets()
    {
        $planets = array(
            array(
                'id' => 'mercury',
                'name' => 'Mercury',
                'moons' => 0,
                'diameter' => 4879,
                'distanceFromSun' => 57.9,
                'img' => 'https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png',
                'wikiUrl' => 'https://en.wikipedia.org/wiki/Mercury_(planet)'
            ),
            array(
                'id' => 'venus',
                'name' => 'Venus',
                'moons' => 0,
                'diameter' => 12104,
                'distanceFromSun' => 108.2,
                'img' => 'https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png',
                'wikiUrl' => 'https://en.wikipedia.org/wiki/Venus'
            ),
            array(
                'id' => 'earth',
                'name' => 'Earth',
                'moons' => 1,
                'diameter' => 12756,
                'distanceFromSun' => 149.6,
                'img' => 'https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png',
                'wikiUrl' => 'https://en.wikipedia.org/wiki/Earth'
            ),
            array(
                'id' => 'mars',
                'name' => 'Mars',
                'moons' => 0,
                'diameter' => 6792,
                'distanceFromSun' => 227.9,
                'img' => 'https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png',
                'wikiUrl' => 'https://en.wikipedia.org/wiki/Mars'
            ),
            array(
                'id' => 'jupiter',
                'name' => 'Jupiter',
                'moons' => 67,
                'diameter' => 142984,
                'distanceFromSun' => 778.6,
                'img' => 'https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png',
                'wikiUrl' => 'https://en.wikipedia.org/wiki/Jupiter'
            ),
            array(
                'id' => 'saturn',
                'name' => 'Saturn',
                'moons' => 62,
                'diameter' => 120536,
                'distanceFromSun' => 1433.5,
                'img' => 'https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png',
                'wikiUrl' => 'https://en.wikipedia.org/wiki/Saturn'
            ),
            array(
                'id' => 'uranus',
                'name' => 'Uranus',
                'moons' => 27,
                'diameter' => 51118,
                'distanceFromSun' => 2872.5,
                'img' => 'https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png',
                'wikiUrl' => 'https://en.wikipedia.org/wiki/Uranus'
            ),
            array(
                'id' => 'neptune',
                'name' => 'Neptune',
                'moons' => 14,
                'diameter' => 49528,
                'distanceFromSun' => 4495.1,
                'img' => 'https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png',
                'wikiUrl' => 'https://en.wikipedia.org/wiki/Neptune'
            ),
        );
        return $this->view(array(
            "planets" => $planets
        ));
    }
}
