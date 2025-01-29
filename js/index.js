// tombol untuk menghitung (tombol hitung)
function hitung() {
	const Tb = document.getElementById("tinggi").value;
	const Bb = document.getElementById("berat").value;

	const tb = (Tb / 100) * (Tb / 100);
	const result = Bb / tb;
	document.getElementById("result").innerText = result.toFixed(1);
}

// tombol untuk mereset tampilan form dan hasil
function reset() {
	tinggi.value = "";
	berat.value = "";
	umur.value = "";
	document.getElementById("result").textContent = "";
}
