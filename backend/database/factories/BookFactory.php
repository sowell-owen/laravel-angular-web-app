<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class BookFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3), // Generates a random sentence
            'author' => $this->faker->name(), // Generates a random name
            'description' => $this->faker->paragraph(2), // Generates a random paragraph
            'publisher' => $this->faker->company(), // Generates a random company name
            'language' => $this->faker->languageCode(), // Generates a random language code
            'pages' => $this->faker->numberBetween(100, 500), // Generates a random number between 100 and 500
            'year' => $this->faker->year // Generates a random year
        ];
    }
}
