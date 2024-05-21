<?php

namespace App\Http\Controllers;

use App\Models\Competence;
use Illuminate\Http\Request;

class CompetenceController extends Controller
{
    public function index()
    {
        $competences = Competence::all();
        return response()->json($competences);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'intervenant_id' => 'required|exists:intervenants,id',
            'nom_competence' => 'required|string|max:255',
            'niveau_competence' => 'required|in:débutant,intermédiaire,expert',
            'description' => 'nullable|string',
        ]);

        $competence = Competence::create($validatedData);
        return response()->json($competence, 201);
    }

    public function show(Competence $competence)
    {
        return response()->json($competence);
    }

    public function update(Request $request, Competence $competence)
    {
        $validatedData = $request->validate([
            'intervenant_id' => 'required|exists:intervenants,id',
            'nom_competence' => 'required|string|max:255',
            'niveau_competence' => 'required|in:débutant,intermédiaire,expert',
            'description' => 'nullable|string',
        ]);

        $competence->update($validatedData);
        return response()->json($competence);
    }

    public function destroy(Competence $competence)
    {
        $competence->delete();
        return response()->json(null, 204);
    }
}
