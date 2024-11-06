function RowPekerjaan(props: any) {
    return (
        <div className="border border-gray-300 rounded-lg bg-transparent p-4 my-4 shadow-md">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-2 text-black">
                    <div className="col-span-12 md:col-span-4 font-medium">{props.Sebagai}</div>
                    <div className="col-span-12 md:col-span-4">{props.instansi}</div>
                    <div className="col-span-12 md:col-span-4">{props.tahun}</div>
                </div>
            </div>
        </div>
    );
}

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-4 text-center pt-16 text-black bg-transparent">
            <h2 className="text-2xl font-semibold mb-6">Riwayat Pekerjaan</h2>
            <RowPekerjaan Sebagai="Pemain Futsal" instansi="OXON" tahun="2024" />
            <RowPekerjaan Sebagai="Model" instansi="Rebound Fashion" tahun="2019" />
            <RowPekerjaan Sebagai="Guru Les" instansi="Bimbel Insan Muda Briliant" tahun="2021" />
            <RowPekerjaan Sebagai="Barista" instansi="Eiger" tahun="2020" />
        </div>
    );
}
