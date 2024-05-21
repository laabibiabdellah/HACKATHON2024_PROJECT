<?php

namespace App\Http\Controllers;

use App\Models\Intervenant;
use App\Models\User;
use Illuminate\Http\Request;

class IntervenantController extends Controller
{
    public function index()
    {
        $intervenants = Intervenant::all();
        return response()->json($intervenants);
    }

    public function show(Intervenant $intervenant)
    {
        return response()->json($intervenant);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'etablissement_id' => 'required',
            'matricule' => 'required|max:255',
            'nom' => 'required|max:45',
            'datenaissance' => 'required|max:45',
            'intitule_diplome' => 'required|max:45',
            'type_diplome' => 'required|max:45',
            'type_intervenant' => 'required|max:45',
            'specialite_diplome' => 'required|max:45',
        ]);

        $hashedPassword = bcrypt($validatedData['password']);

        $user = User::create([
            'email' => $validatedData['email'],
            'password' => $hashedPassword
        ]);

        Intervenant::create([
            'user_id' => $user->id,
            'region_id' => $validatedData['region_id'],
            'nom_efp' => $validatedData['nom_efp'],
            'adresse' => $validatedData['adresse'],
            'tel' => $validatedData['tel'],
            'ville' => $validatedData['ville'],
            'status' => $validatedData['status'],
        ]);

        return response()->json([
            'message' => 'Etablissement created successfully!'
        ], 201);
    }


    public function update(Request $request, Intervenant $intervenant)
    {
        $validatedData = $request->validate([
            'etablissements_id' => 'nullable|exists:etablissements,id',
            'users_id' => 'nullable|exists:users,id',
            'matricule' => 'nullable|string|max:45',
            'nom' => 'nullable|string|max:45',
            'datenaissance' => 'nullable|string|max:45',
            'intitule_diplome' => 'nullable|string|max:45',
            'type_diplome' => 'nullable|string|max:45',
            'specialite_diplome' => 'nullable|string|max:45',
            'type_intervenant' => 'nullable|integer',
            'status' => 'nullable|integer',
        ]);

        $intervenant->update($validatedData);
        return response()->json($intervenant);
    }

    public function destroy(Intervenant $intervenant)
    {
        $intervenant->delete();
        return response()->json(null, 204);
    }

}
