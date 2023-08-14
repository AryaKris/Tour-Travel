import React from "react";

export default function Card({ cardImages }) {
	return (
		<>
			<div className="grid grid-cols-4 gap-4">
				<div className="col-span-4 ...">
					<div className="grid grid-cols-2 gap-4">
						<div ClassName="...">
							<h1 className="text-4xl text-left font-playfair font-bold">
								Featured destinations
							</h1>
						</div>
						<div ClassName="...">
							<h1 className="text-right font-inter mx-1 font-semibold text-amber-500 py-6">
								View all &gt;
							</h1>
						</div>
					</div>
				</div>
				{cardImages.map((img) => (
					<div ClassName="...">
						<img src={`../images/${img.coverImg}`} alt="" />
					</div>
				))}
			</div>
		</>
	);
}
